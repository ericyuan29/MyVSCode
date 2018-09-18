$(document).ready(() => {
    const $dropdown = $('.dropdown-menu')
    $('#cart').on('click', () => {
      $('#cartMenu').show();
      });
    $('#account').on('click', () => {
      $('#accountMenu').show();
    });
    $('#help').on('click', () => {
      $('#helpMenu').show();
    });
    $dropdown.on('mouseleave', () => {
    $dropdown.hide();
    });
  });