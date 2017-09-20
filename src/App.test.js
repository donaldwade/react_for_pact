import test from 'blue-tape';
import pact from 'pact';
import path from 'path';

import { makeRequest, hitGoEndpoint  } from './helpers';

const MOCK_SERVER_PORT = 2202;

test('Pact', (t) => {
  const provider = pact(
    {
      consumer: 'MyApp',
      provider: 'MyService',
      port: MOCK_SERVER_PORT,
      log: path.resolve(process.cwd(), 'logs', 'pact.log'),
      dir: path.resolve(process.cwd(), 'pacts'),
      logLevel: 'DEBUG',
      spec: 2
    }
  );

  const expectedResponse = {
    one: 'two',
    key: 'value',
  };

  const url = 'http://localhost:2202'

  provider.setup() // returns a promise
    .then(() => {
      console.log('Adding interaction');
      provider.addInteraction({ // returns a promise
        state: 'Here is a thing',
        uponReceiving: 'a get request',
        withRequest: {
          method: 'GET',
          path: '/key/value/one/two',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: expectedResponse
        }
      })
    })
    .then(() => makeRequest(url))
    .then((response) => {
      console.log("I've got here");
      t.deepEqual(response, expectedResponse);
    })
    .catch(e => {
      throw new Error("Unable to start the Pact Server: " + e)
    })
    .then(() => {
      provider.verify();
      provider.finalize();
      t.end();
    });
});

test("Hit Golang API", (t) => {
  const provider = pact(
    {
      consumer: 'MyReactFrontEnd',
      provider: 'GolangAPI',
      port: MOCK_SERVER_PORT+1,
      log: path.resolve(process.cwd(), 'logs', 'pact.log'),
      dir: path.resolve(process.cwd(), 'pacts'),
      logLevel: 'DEBUG',
      spec: 2
    }
  );

  const expectedResponse = {
    ok: true
  }

  // const url = 'http://localhost:1323'
  const url = 'http://localhost:2203'
  
  provider.setup()
    .then(() => {
      console.log('Adding an interaction for the Golang API');
      provider.addInteraction({
        state: 'Golang API service is up',
        uponReceiving: 'a GET request',
        withRequest: {
          method: 'GET',
          path: '/go/test',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: expectedResponse
        }
      })
    })
    .then(() => hitGoEndpoint(url))
    .then((response) => {
      console.log("I've got here");
      t.deepEqual(response, expectedResponse)
    })
    .catch(e => {
      throw new Error('Unable to start the Pact server: ' + e)
    })
    .then(() => {
      provider.verify();
      provider.finalize();
      t.end();
    });
  
})
