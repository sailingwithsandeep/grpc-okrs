import grpc from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';

const initPackage = await load('test.proto', {});

const testPackage = grpc.loadPackageDefinition(initPackage).firstGRPC;
const client = new testPackage.testServices('localhost:3000', grpc.credentials.createInsecure());

client.getData({ id: 2348327, text: 'Are you winning son?' }, function (err, res) {
    if (err) console.error(err);
    console.log('response', res);
});

client.getData({ id: 2348327, text: 'Are you winning son?' }, function (err, res) {
    if (err) console.error(err);
    console.log('response', res);
});

client.getData({ id: 2348327, text: 'Are you winning son?' }, function (err, res) {
    if (err) console.error(err);
    console.log('response', res);
});

client.sendData({}, function (err, res) {
    if (err) console.error(err);
    console.log('response', res);
});

const call = client.readStream();
call.on('data', data => {
    console.log('stream from server', data);
});

call.on('end', () => console.log('I think we are done here'));
