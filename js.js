const circle = document.querySelector('#cursor-circle')
const titleContainers = document.querySelectorAll('.title-container')

document.addEventListener('mousemove', e => {
  const active = document.querySelector('.title-container.active')

  if (active) {
    const midTopPos = active.offsetTop + (active.clientHeight / 2)
    const midLeftPos = active.offsetLeft + (active.clientWidth / 2)

    circle.style.top = `${midTopPos}px`
    circle.style.left = `${midLeftPos}px`
  } else {
    circle.style.top = `${e.pageY}px`
    circle.style.left = `${e.pageX}px`
  }
})

document.addEventListener('mouseenter', e => {
  circle.classList.add('cursor-in')
  circle.classList.remove('cursor-out')
})

document.addEventListener('mouseleave', e => {
  circle.classList.remove('cursor-in')
  circle.classList.add('cursor-out')
})


titleContainers.forEach(titleContainer => {
  const title = titleContainer.querySelector('.title');
  const activeAfter = window.getComputedStyle(titleContainer,':before')
  console.log(activeAfter)

  titleContainer.addEventListener('mousemove', e => {
    const midWidth = titleContainer.clientWidth / 2
    const midHeight = titleContainer.clientHeight / 2

    title.style.transform = `translate(${(e.offsetX - midHeight) / 2.7}px, 
          ${(e.offsetY - midWidth) / 2.7}px)`
  })

  titleContainer.addEventListener('mouseenter', e => {
    titleContainer.classList.add('active')
  })

  titleContainer.addEventListener('mouseleave', e => {
    title.style.transform = `translate(0, 0)`
    titleContainer.classList.remove('active')
  })
})




