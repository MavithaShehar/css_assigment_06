

var row_index = null;

const clear = () => {
    $("#item-id").val("");
    $("#item-name").val("");
    $("#item-price").val("");
    $("#item-qt").val("");
}

// submit
$("button[type='button']").eq(1).on("click", () => {
    let item_id = $("#item-id").val();
    let item_name = $("#item-name").val();
    let item_price = $("#item-price").val();
    let item_qt = $("#item-qt").val();


    let record = `<tr>
                    <td class="item_id">${item_id}</td>
                    <td class="item_name">${item_name}</td>
                    <td class="item_price">${item_price}</td>
                    <td class="item_qt">${item_qt}</td>
                    </tr>`;

    $("#item-tbl-body").append(record);

    // clear();
    $("button[type='reset']").click();
});

// update
$("button[type='button']").eq(2).on("click", () => {

    let item_id = $("#item-id").val();
    let item_name = $("#name").val();
    let item_price = $("#item-price").val();
    let item_qt = $("#item-qt").val();


    let record = `<td class="item_id">${item_id}</td>
                    <td class="item_name">${item_name}</td>
                    <td class="item_price">${item_price}</td>
                    <td class="item_qt">${item_qt}
        </td>`;

    $("tbody>tr").eq(row_index).html(record);

    // clear();
    $("button[type='reset']").click();
})

// delete
$("button[type='button']").eq(3).on("click", () => {
    $("tbody>tr").eq(row_index).remove();
})

// reset
$("button[type='reset']").on("click", () => {
    console.log("hello");
})

$("tbody").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let item_id = $(this).find(".item_id").text();
    let item_name = $(this).find(".item_name").text();
    let item_price = $(this).find(".item_price").text();
    let item_qt = $(this).find(".item_qt").text();

    $("#item-id").val(item_id);
    $("#item-name").val(item_name);
    $("#item-price").val(item_price);
    $("#item-qt").val(item_qt);

});

/////////////////////////////// Search option ////////////////////////////////////////

$("button[type='button']").eq(0).on("click", () => {

    let search_value = $("#search").val();

    console.log(search_value);

})





