let bottomX = 200

function setup () {
  createCanvas(502, 502)
  frameRate(60)
}

function draw () {
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // A, left
    bottomX -= 5
  }

  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // D, right
    bottomX += 5
  }

  if (bottomX < 0) {
    bottomX = 0
  }

  if (bottomX > 400) {
      bottomX = 400
  }

  clear()
  fill(100, 100, 100)
  rect(bottomX, 480, 100, 20)

  noFill()
  rect(0, 0, 500, 500) // border
}
