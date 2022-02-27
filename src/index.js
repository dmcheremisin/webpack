import Post from './Post'
import data from './assets/data.json'
import './styles/style.css'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString())
console.log('JSON: ', data)