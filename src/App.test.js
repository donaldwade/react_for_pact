import test from 'blue-tape';
import pact from 'pact';
import path from 'path';

import { makeRequest } from './helpers';

const MOCK_SERVER_PORT = 2202;

let pactServer;

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
            'Content-Type': 'application/json'
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
})
