var hotelbeds = require('./hotelbeds.js');

// hotelbeds.search({
//     hotelsCodeList: [5480],
//     checkinDate: '20140606',
//     checkoutDate: '20140607',
//     rooms: ['2', '2'],
//     language: 'ENG',
//     echoToken: '231qweqew',
//     sessionId: 'asdase123123',
//     user: 'LASTROOMMX126119',
//     password: 'LASTROOMMX126119'
// }, function(err, results) {
//     console.log(err, results);
// });

hotelbeds.purchaseCancel({
    password: 'LASTROOMMX126119',
    username: 'LASTROOMMX126119',
    fileNumber: 234324,
    incomingOffice: 44 
}, function(err, out) {
    console.log(err, out);
});
