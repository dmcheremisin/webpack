import * as $ from 'jquery';
import Post from '@models/Post'
import data from '@/assets/data'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import '@/styles/style'
import WebpackLogo from '@/assets/webpack-logo'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())

console.log('Post to String: ', post.toString())
console.log('JSON: ', data)
console.log('XML: ', xml)
console.log('CSV: ', csv)