const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/thermostat.proto';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
});
const thermostat_proto = grpc.loadPackageDefinition(packageDefinition).thermostat;

function getTemperature(call, callback) {
  const temperature = Math.random() * 30; // Simulated temperature reading
  callback(null, { temperature });
}

const server = new grpc.Server();
server.addService(thermostat_proto.Thermostat.service, { GetTemperature: getTemperature });
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
