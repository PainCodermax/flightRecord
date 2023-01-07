const PDFDocument = require('pdfkit');
const fs = require('fs');

//Create a document
const doc = new PDFDocument();

//Pipe its output somewhere, like to a file or HTTP response
//See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

//Embed a font, set the font size, and render some text
doc
doc
    .font('Helvetica')
    .fontSize(24).fillColor('#444444')
    .text('Flight daily report', {align: 'center'})
    .font('Helvetica')
    .fontSize(15)
    .text('Tuesday: 5/12/2022', {align: 'center'})
    .moveDown()
    .font('Helvetica')
    .fontSize(10).fillColor('black')
    .text('Flights are recorded on a daily basis, and are completed based on analyst Nguyen Tuan Trung, any questions please contact email: ' + 'Trungafk0806@gmail.com', {align: 'center'})
    
    // ------------- image -------------- // 
    .image('Logo1.png', 234.5, 170, {scale: 0.4})
    .fillColor('black').fontSize(15)
// Flight number
    .font('Helvetica')
    .text('Flight Number: ', 73, 290, {align: 'left', continued: true})
    .font('Helvetica')
    .text('MS-123XX')
// // ------------- Plane information -------------- // 
    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Plane name: ', 73, 335.5, {continued: true})
    .font('Helvetica')
    .text('Boeing A36', {continued: true})
    .font('Helvetica')
    .text(' - Captain: ', {continued: true})
    .font('Helvetica')
    .text('Alexandre Putin')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Total Customer: ', 73, 370.5, {continued: true})
    .font('Helvetica')
    .text('200')
    
    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Revenue: ', 73, 405.5, {continued: true})
    .font('Helvetica')
    .text('54.000 AUD', {continued: true})
    .font('Helvetica')
    .text(' - Operation cost: ', {continued: true})
    .font('Helvetica')
    .text('35.500 AUD', {continued: true})
    .text(' - Profit: ', {continued: true})
    .font('Helvetica')
    .text('18.500 AUD')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Date Start: ', 73, 440.5, {continued: true})
    .font('Helvetica')
    .text('23:00 Thu, Feb 13, 2022')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Date end: ', 73, 475.5, {continued: true})
    .font('Helvetica')
    .text('02:00 Thu, Feb 13, 2022')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' Time flight: ', 73, 510.5, {continued: true})
    .font('Helvetica')
    .text('4 hours')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' From: ', 73, 545.5, {continued: true})
    .font('Helvetica')
    .text('Indonesia')

    .moveDown()
    .font('Montserrat-Regular.ttf')
    .fontSize(22.5).fillColor([115,115,115])
    .text('▶', {align: 'left', continued: true})
    .fillColor('black').fontSize(11)
    .font('Helvetica')
    .text(' To: ', 73, 580.5, {continued: true})
    .font('Helvetica')
    .text('Da Nang, Viet Nam')
    .text('Analysis by Nguyen Tuan Trung', 410, doc.page.height - 50, {align: 'right', lineBreak: false})

// Finalize PDF file
doc.end();


// const doc = new PDFDocument();
//     doc.pipe(fs.createWriteStream('output.pdf'));
//     doc
//     .font('Helvetica')
//     .fontSize(24).fillColor('#444444')
//     .text('Flight daily report', {align: 'center'})
//     .font('Helvetica')
//     .fontSize(15)
//     .text('Tuesday: 5/12/2022', {align: 'center'})
//     .moveDown()
//     .font('Helvetica')
//     .fontSize(10).fillColor('black')
//     .text('Flights are recorded on a daily basis, and are completed based on analyst Nguyen Tuan Trung, any questions please contact email: ' + 'Trungafk0806@gmail.com', {align: 'center'})
    
//     // ------------- image -------------- // 
//     .image('Logo1.png', 234.5, 170, {scale: 0.4})
//     .fillColor('black').fontSize(15)

    // ------------- Flight number -------------- // 
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text('Flight Number: ', 73, 290, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[1]['ID'])
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')

    // // ------------- Plane information -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .text(' Plane name: ', 73, 335.5, {continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[1]['Flight name'], {continued: true})
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' - Captain: ', {continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[1]['Captain'])

    // // ------------- Total customer -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' Total customer: ', 73, 370.5, {continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[4]['Customer'])

    // // ------------- Revenue + Operation + Profit -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' Revenue: ', 73, 405.5,{align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[2]['Revenue In AUD'] + ' AUD', {continued: true})
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' - Operation cost: ', {continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[3]['Cost In AUD'] + ' AUD', {continued: true})
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' - Profit: ', {continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[11]['Profit in AUD'] + ' AUD')

    // // ------------- Date start + form -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' Date start: ', 73, 441.5, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[5]['Date from'])
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' From: ', 73, 477.5, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[8]['From'])

    // // ------------- Date end + to -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' Date end: ', 73, 513.5, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[6]['Date to'])
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' To: ', 73, 549.5, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[9]['To'])

    // // ------------- Time Fly -------------- // 
    // .moveDown()
    // .fontSize(22.5).fillColor([115,115,115])
    // .text('▶', {align: 'left', continued: true})
    // .fillColor('black').fontSize(11)
    // .font('dataPDF/fonts/Montserrat-Bold.ttf')
    // .text(' Time fly: ', 73, 585, {align: 'left', continued: true})
    // .font('dataPDF/fonts/Montserrat-Regular.ttf')
    // .text(inputData[7]['TimeFly'] + ' Hours')

    // // ----------- title end ----------- //
    // .text('"Analysis by Desplay Shido"', 410, doc.page.height - 50, {align: 'right', lineBreak: false})
    // .end();


