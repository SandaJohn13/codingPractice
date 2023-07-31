const context = {
  title: 'Welcome to Musicon',
  body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
  instruments: [
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: '$649.00',
      sale: '$349.00'
    },
    {
     image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/violin.png',
  name: 'Violin',
  description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
  price: '$245.00'
    },
    {
      image: 'https://th.bing.com/th/id/R.4139c6742ca0d02d1e24cd97c18db21d?rik=uA4rnGpalLRu5Q&riu=http%3a%2f%2fdm61q01mhxuli.cloudfront.net%2fimages%2fc218%2fimage2%2fproducts62075-1800x1800-1403827.jpg&ehk=Eo6NvDYaVYAMG30F2kykkTRjcbBHQwBCdszMAC88cNU%3d&risl=&pid=ImgRaw&r=0',
      name: 'Trumpet',
      description: 'it is a nice trumpet played by Mr. Louis',
      price: '$1,000,000.00'
    }
  ]
};

const templateElement = document.getElementById("templateHB")
const templateSource = templateElement.innerHTML

const template = Handlebars.compile(templateSource)

const compileHtml = template(context);

document.getElementById('information').innerHTML = compileHtml;

