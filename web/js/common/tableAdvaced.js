/**
 * Created by Mr on 2019/1/2.
 */
var TableAdvanced = function () {
    var initTable = function(id,head,data,isAdvanced) {

        var temp = [];
        for (var i = 0; i < data.length; i++) {
            var tmpObj = [];
            for(var item in data[i]){
                if(typeof(data[i][item])   ==   "undefined"){
                    tmpObj.push("");
                }else{
                    tmpObj.push(data[i][item]);
                }
            }
            temp.push(tmpObj);
        }
        var headObj = [];
        for(var th=0;th<head.length;th++){
            var tTitle =  {"sTitle" : head[th]};
            headObj.push(tTitle);
        }
        var disLen = 5;
        var sortCol = 2;
        if(isAdvanced == undefined || isAdvanced){isAdvanced=true;disLen=10;sortCol=1}
        var oTable = $(id).dataTable( {
            dom: "Bfrtip",
            buttons: [
                {
                    extend: "copy",
                    className: "btn-sm"
                },
                {
                    extend: "csv",
                    className: "btn-sm"
                },
                {
                    extend: "excel",
                    className: "btn-sm"
                },
                {
                    extend: "pdfHtml5",
                    className: "btn-sm"
                },
                {
                    extend: "print",
                    className: "btn-sm"
                }
            ],
            "aoColumnDefs": [
                { "aTargets": [ 0 ] }
            ],
            "aaSorting": [[sortCol, 'desc']],
            "aLengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            "searching":isAdvanced,
            "bLengthChange": isAdvanced,
            // set the initial value
            "iDisplayLength": disLen,
            /* Reduced data set */
            "aaData" : temp,
            "aoColumns" : headObj,

            "oLanguage": {
                "sProcessing": "???????????????......",
                "sLengthMenu": "???????????? _MENU_ ?????????",
                "sZeroRecords": "???????????????????????????????????????",
                "sEmptyTable": "????????????????????????",
                "sInfo": "???????????? _START_ ??? _END_ ????????? _TOTAL_ ?????????",
                "sInfoEmpty": "????????????????????????",
                "sInfoFiltered": "?????????????????? _MAX_ ?????????",
                // "sSearch": "??????",
                "oPaginate": {
                    "sFirst": "??????",
                    "sPrevious": "?????????",
                    "sNext": "?????????",
                    "sLast": "??????"
                }
            }, response: true
        });

    }

    return {

        //main function to initiate the module
        init: function (id,head,data,isAdvanced) {

            if (!jQuery().dataTable) {
                return;
            }
            // if ( $.fn.dataTable.IsDataTable( id ) ) {
            //     $(id).DataTable().destroy();
            // }
            initTable(id,head,data,isAdvanced);
            // $(id+"_paginate" >ul).addClass("pagination");
        }

    };

}();