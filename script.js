var btnInsert = document.getElementById('btn-insert');
var btnSell = document.getElementById('btn-sell');
var btnReprt = document.getElementById('btn-report');
var btnDrop = document.getElementById('btn-drop');
var btnInsertPro = document.getElementById('btn-insrt-product');
var category = document.getElementById('category');
var btnModifyPro =  document.getElementById('btn-modify-pro');
var CategoryPro = document.getElementById('insert-pro');
var modifyPro = document.getElementById('modify-pro');

var btnsellproduct = document.getElementById('btn-sell-product');
var btnmodifyproductsell = document.getElementById('btn-modify-product-sell');

var btnReportProduct = document.getElementById('btn-report-product');
var btnViewReportProduct = document.getElementById('btn-view-report-product');

var insertProductContain = `
    <ul id="insert-pro">
        <li>Code  :.....</li>
        <li>Model :.....</li>
        <li>Price :.....</li>
        <li>Stock :.....</li>
        <li>Category :.....</li>
    </ul>
`;

var modifyProductContain = `
<ul id="modify-pro">
    <li>
        Edit
        <ol>
            <li>Edit Model</li>
            <li>Edit Stock</li>
            <li>Edit Price</li>
            <li>Edit Category</li>
        </ol>
    </li>
    <li>Delete</li>
    <li>Sort</li>
</ul>
`;

var sellDetail = `
<ul>
    <li>
        Insert
        <ol>
            <li>Staff id</li>
            <li>Cotomer name</li>
            <li>Product code</li>
            <li>Prodecut Quantity</li>
        </ol>
    </li>
</ul>`;

var modifysellDetail = `
    <ul>
        <li>Edit
            <ol>
                <li>Edit Staff id</li>
                <li>Edit Cotomer name</li>
                <li>Edit Product code</li>
                <li>Edit Prodecut Quantity</li>
            </ol>
        </li>
        <li>Delete</li>
    </ul>`;

var tableStock = `
<table class="table table-dark table-hover align-middle">
<tr>
    <th>Code</th>
    <th>Model</th>
    <th>Category</th>
    <th>Price</th>
    <th>Stock</th>
</tr>
<tr>
    <td>100</td>
    <td>ASUS</td>
    <td>ASUS VivoBook</td>
    <td>699.99$</td>
    <td>10</td>
</tr>
<tr>
    <td>101</td>
    <td>ASUS</td>
    <td>ASUS ZenBook</td>
    <td>999.59$</td>
    <td>15</td>
</tr>
<tr>
    <td>102</td>
    <td>ASUS</td>
    <td>ASUS ROG Skar</td>
    <td>1199.49$</td>
    <td>8</td>
</tr>
</table>
`;
var tableReport = `
<table class="table table-hover table-dark aling-middle">
<tr>
    <th>Staff id</th>
    <th>Costomer name</th>
    <th>Product code</th>
    <th>Product category</th>
    <th>Product price</th>
    <th>Quantity</th>
</tr>
<tr>
    <td>1</td>
    <td>chea Ta</td>
    <td>1005</td>
    <td>MacBook Air</td>
    <td>1199.99$</td>
    <td>1</td>
</tr>
<tr>
    <td>1</td>
    <td>Ricky</td>
    <td>1008</td>
    <td>MacBook Pro</td>
    <td>2199.99$</td>
    <td>1</td>
</tr>
<tr>
    <td>2</td>
    <td>Chan Tola</td>
    <td>1010</td>
    <td>ASUS Vivobook 16</td>
    <td>999$</td>
    <td>1</td>
</tr>
<tr>
    <td>    
        Total: 3500$
    </td>
</tr>
</table>
`;
let check = true;
let bool = true;
btnInsert.addEventListener("click",function(){
    
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }
    
    btnInsertPro.style='display: contain;';
    btnModifyPro.style='display: contain;';
    btnReportProduct.style='display: none;';
    btnViewReportProduct.style='display: none;';

    btnsellproduct.style='display: none;';
    btnmodifyproductsell.style='display: none;';

    btnInsertPro.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = insertProductContain;
    });
    btnModifyPro.addEventListener('click',function(){
        if(bool){
            category.style="height : 250px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = modifyProductContain;
    });
});

btnSell.addEventListener("click",function(){
    
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }
    btnInsertPro.style='display: none;';
    btnModifyPro.style='display: none;';
    btnReportProduct.style='display: none;';
    btnViewReportProduct.style='display: none;';
    
    btnsellproduct.style='display: contain;';
    btnmodifyproductsell.style='display: contain;';

    btnsellproduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = sellDetail;
    });
    btnmodifyproductsell.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = modifysellDetail;
    })
});

btnReprt.addEventListener("click",function(){
    btnInsertPro.style='display: none;';
    btnModifyPro.style='display: none;';
    btnsellproduct.style='display: none;';
    btnmodifyproductsell.style='display: none;';
    
    btnReportProduct.style='display: contain;';
    btnViewReportProduct.style='display: contain;';
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }

    btnReportProduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = tableStock;
    });
    btnViewReportProduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = tableReport;
    });
});