


$.post( '/dashboard' ).done(function (data1) {
            $(document).ready(function() {
                $('#example').DataTable( {
                    data : data1,
                    columns: [
                        {data: 'treatmentNum'},
                        {data: 'treatmentInfo'},
                        {data: 'date'},
                        {data: 'workerEmail'},
                        {data: 'carNum'},
                        {defaultContent: '<button onclick="deleteRow(123)">Delete</button> / <button onclick="deleteRow(123)">Edit</button>'}
                    ]
                } );
            });
} );





function deleteRow(treatmentNum) {
    console.log("here");
}


function DashAction(actionNumber)
{
    if (actionNumber)
    {
        //do somthing 
    }
    else 
    {
        //do somthing else
    }
}


var ema_shel_fishman = true;
