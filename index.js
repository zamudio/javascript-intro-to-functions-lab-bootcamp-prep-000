function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout)
}

function logWhisper(string) {
  console.log(whisper)
}


//grandma
var uppercase = "HELLO!"
var lowercase = "hello!"

var mixedCase = "Hi there!"
mixedCase.toLowerCase() === mixedCase //false
mixedCase.toUpperCase() === mixedCase //false

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!"
  } if (string === uppercase) {
    return "YES INDEED!"
  }
}


describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})