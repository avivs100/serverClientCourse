


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
                        {defaultContent: '<button onclick="deleteRow(this)">Delete</button>'}
                    ]
                } );
            });
} );





function deleteRow(btnToDelete) {
    let rowToDelete = btnToDelete.closest("tr");
    let treatmentNum = rowToDelete.cells[0].textContent;
    $.post( '/dashboard_delete' ,{treatmentNum: treatmentNum}).always(function () {
            location.reload(); 
    } ); 
    location.reload();    
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



