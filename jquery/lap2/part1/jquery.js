$($("img")[1]).draggable();
$($("img")[0]).droppable({
  drop: function() {
    $($("img")[1]).hide()
  }
});