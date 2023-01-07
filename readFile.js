const xlsx = require("xlsx");

const ReadData = function(input) {
    const WorkBook = xlsx.readFile(input, {cellDates:true});
    const WorkSheet = WorkBook.Sheets[WorkBook.SheetNames[0]];
    var DataFlight = xlsx.utils.sheet_to_json(WorkSheet, {header: 1});
    for( let i=0; i<Data.length;i++)
    {
        if(DataFlight[i][0] === undefined)
        {
            DataFlight = DataFlight.splice(0,i)
            break;
        }
    }
    //console.log(Data[3][0])
    //Data.splice(0,2);
    console.log(DataFlight)
}


function xlsxReader(path) {
    const file = xlsx.readFile(path)
    let sheet = 'Sheet1'
    let ws = file.Sheets[sheet]
   // console.log(ws)
    ws['!ref'] = "A2:Z100"
    const temp = xlsx.utils.sheet_to_json(ws, {
        raw: false,
    })
    console.log(temp);
    return temp;

}

xlsxReader("./Data/Flight data.xlsx");


module.exports = {ReadData};