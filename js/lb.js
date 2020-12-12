// 导航点击颜色切换功能
$(document).ready(function () {
  $(".toc-link").each(function () {
    $(this).click(function () {
      $(".toc-link").css({ color: "#000" });
      $(this).css({ color: "#0080FF" });
    });
  });
});

// 删除自动生成的导航数字
$(document).ready(function () {
    $(".toc-number").remove();
});

// 显示view数量
$(document).ready(function () {
  $("#busuanzi_container_page_pv").css({display: "inherit"});
});

$(document).ready(function () {
  let a = $("#busuanzi_value_site_pv").text() - 26496800;
  $("#busuanzi_value_site_pv").text(a);
});

$(document).ready(function () {

});