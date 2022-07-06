"use strict";

{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");

  // 詳細を見るをクリックしたらid=mask,modalのhiddenクラスを削除して、modal表示
  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  // id=closeをクリックしたらid=modal,maskにhiddenクラスを付けてmodalを非表示
  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  // id=maskにもcloseと同じ処理をする。
  mask.addEventListener("click", () => {
    close.click();
  });
}
