

$.post( '/dashboard' ).done(function (data1) {
    $(document).ready(function() {
        $('#example').DataTable( {
            data : data1
        } );
    });
} );


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
