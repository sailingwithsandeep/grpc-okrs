import grpc, { ServerCredentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';

const initPackage = await load('test.proto', {});

const testPackage = grpc.loadPackageDefinition(initPackage).firstGRPC;

const grpcServer = new grpc.Server();

grpcServer.bindAsync('0.0.0.0:3000', ServerCredentials.createInsecure(), function (error, port) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    grpcServer.start();
    console.log('Blazingly fast ⚡️', port);
});

grpcServer.addService(testPackage.testServices.service, { getData, sendData, readStream });

const arr = [];

function getData(call, callback) {
    arr.push({
        id: arr.length + 1,
        text: call.request.text,
    });
    console.log(arr);
    callback(null, { message: 'success', code: 201 });
}
function sendData(call, callback) {
    callback(null, { testMessage: arr });
}

function readStream(call, callback) {
    for (const iterator of arr) call.write(iterator);
    call.end();
}
