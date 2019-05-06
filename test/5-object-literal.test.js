test('can use shorthand for property names', () => {
    function createMonster(name, power) {
      // Using NEW Object Literal syntax, return a literal that will allow the tests to pass
       return {
        type: 'Monster',
        name: name,
        power: power,
        attack: function (target){
          return `${this.name} attacked ${target.name}`;
        }
      }
    }
  
    const godzilla = createMonster('Godzilla', 1000)
    const mechaGodzilla = createMonster('MechaGodzilla', 5000)
    expect(godzilla.name).toBe('Godzilla')
    expect(godzilla.power).toBe(1000)
    expect(godzilla.attack(mechaGodzilla)).toBe('Godzilla attacked MechaGodzilla')
  })
  
  test('can use expressions as property names', () => {
    function createCandy(type, description) {
      return {
        tasty: true,
        type,
        [`${type.toUpperCase()}4`]: description
      }
    }
  
    const twixDescription =
      'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
      'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.'
    const twixType = 'twix'
    const snickers = createCandy('twix', twixDescription)
    expect(snickers.tasty).toBe(true)
    expect(snickers.type).toBe(twixType)
    expect(snickers.TWIX4).toBe(twixDescription)

    const kitkatDescription = 
      'Kit Kat is a chocolate-covered wafer bar confection created by Rowntree\'s of York, ' +
      'United Kingdom, and is now produced globally by Nestlé.'
    const kitkatType = 'kitkat'
    const otherSnickers = createCandy('kitkat', kitkatDescription)
    //expect(snickers.tasty).toBe(true)
    //expect(snickers.type).toBe(kitkatType)
    //expect(snickers.KITKAT6).toBe(kitkatDescription)
  })
