# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

writingSamples = WritingSample.create([
  {content: 'Roses are red \n Violets are blue \n Please take this daffodil \n I have had my floral fill', genre: 'poem', author: 'flower-power', random: 'daffodil'},
  {content: 'It is illegal to bring your pet iguana to the theater on Tuesdays.', genre: 'law', author: 'l1zardl0ver', random: 'theater'}
  ])
