const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const result = utils.trimProperties(input);
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(expected)
  }) 
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const result = utils.trimPropertiesMutation(input);
    console.log('test', result)
    expect(result).toEqual(input)
  }) 
  
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('[5] returns the largest number in an array of objects', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const expected = 3;
    const result = utils.findLargestInteger(input);
    expect(result).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const result = counter.countDown()
    expect(result).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const result = counter.countDown()
    expect(result).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const result = counter.countDown()
    expect(result).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const result = seasons.next()
    expect(result).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const result = seasons.next()
    expect(result).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const result = seasons.next()
    expect(result).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const result = seasons.next()
    expect(result).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const result = seasons.next()
    expect(result).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    const result = seasons.next()
    expect(result).toEqual('spring')
  })
  
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
  test('[15] driving the car returns the updated odometer', () => {
    const result = focus.drive(150)
    expect(result).toEqual(150)
  })
  test('[16] driving the car uses gas', () => {
    const originalMilesLeft = focus.milesLeft;
    focus.drive(150)
    const result = focus.drive(150)
    expect(focus.milesLeft).toEqual(300)
  })
  test('[17] refueling allows to keep driving', () => {
    const result = focus.drive(600)
    console.log(result)
    focus.refuel(21)
    expect(focus.milesLeft).toEqual(600)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(21)
    expect(focus.milesLeft).toEqual(600)
  })

})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
  test('[19] resolves true if passed an even number', () => {
    const result = utils.isEvenNumberAsync(2)
    expect(result).toEqual(true)
  })
  test('[20] resolves false if passed an odd number', () => {
    const result = utils.isEvenNumberAsync(1)
    expect(result).toEqual(false)
  })
})
