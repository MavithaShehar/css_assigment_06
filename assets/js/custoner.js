var row_index = null;

const clear = () => {
    $("#customer-id").val("");
    $("#name").val("");
    $("#tel-no").val("");
    $("#address").val("");
}

// submit
$("button[type='button']").eq(1).on("click", () => {
    let customer_id = $("#customer-id").val();
    let name = $("#name").val();
    let tel_no = $("#tel-no").val();
    let address = $("#address").val();


    let record = `<tr><td class="customer_id">${customer_id}</td><td class="name">${name}</td><td class="tel_no">${tel_no}</td><td class="address">${address}
        </td></tr>`;
    $("#customer-tbl-body").append(record);

    // clear();
    $("button[type='reset']").click();
});

// update
$("button[type='button']").eq(2).on("click", () => {

    let customer_id = $("#customer-id").val();
    let name = $("#name").val();
    let tel_no = $("#tel-no").val();
    let address = $("#address").val();


    let record = `<td class="customer_id">${customer_id}</td><td class="name">${name}</td><td class="tel_no">${tel_no}</td><td class="address">${address}
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

    let customer_id = $(this).find(".customer_id").text();
    let name = $(this).find(".name").text();
    let tel_no = $(this).find(".tel_no").text();
    let address = $(this).find(".address").text();

    $("#customer-id").val(customer_id);
    $("#name").val(name);
    $("#tel-no").val(tel_no);
    $("#address").val(address);

});

/////////////////////////////// Search option ////////////////////////////////////////

$("button[type='button']").eq(0).on("click", () => {

    let search_value = $("#search").val();

    console.log(search_value);

})




