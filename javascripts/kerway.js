console.log('jaja');

$('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: 30,
  columnWidth: '.grid-sizer',
  percentPosition: true,
  // horizontalOrder: true,
});