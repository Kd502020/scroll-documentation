document.addEventListener("DOMContentLoaded", function () {
  const preElements = document.querySelectorAll(".expressive-code")
  preElements.forEach((pre) => {
    const hasTargetClass = pre.querySelector(".highlight")
    if (hasTargetClass) {
      pre.classList.add("has-focused-lines")
    }
  })
})
