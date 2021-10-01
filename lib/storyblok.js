import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'ylLkS6IvJaEX4UI9G5JYwAtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
