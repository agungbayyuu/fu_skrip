function generateTiketFOCut(){

  const nama = document.getElementById('nama_userfo').value;

  if(!nama){
    alert('Nama customer belum diisi');
    return;
  }

  const script =
`(function () {

  $('#issue_tracker_id').val('1').trigger('change');
  $('#issue_status_id').val('1').trigger('change');
  $('#issue_category_id').val('159805').trigger('change');

  $(document).one('ajaxStop', function () {

    $('#issue_subject').val('(Link Problem) FO Cut - ${nama}');

    $('#issue_description').val(
\`Dear Team

Terpantau link FO Cut pada site ${nama}.\`
    );

    $('#issue_assigned_to_id').val('179');

    $('#issue_category_id').val('159805').trigger('change');

    $('#issue_custom_field_values_77').val('CGS');

    console.log('✔️ Ticket FO Cut berhasil digenerate');

  });

})();`;

  scriptTicket.innerText = script;

  urlTicket.innerText =
  "https://project.dwp.io/projects/link-3rd-party-untuk-user/issues/new";

}
