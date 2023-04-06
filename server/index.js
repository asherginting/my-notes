const express = require('express')
const app = express()
const port = 5000

// DB Harcode
let notes = [
  { id: 1, title: 'Tugas IPA', description: 'Ini adalah catatan pertama' },
  { id: 2, title: 'Tugas Matematika', description: 'Ini adalah catatan kedua' },
  { id: 3, title: 'Tugas PKN', description: 'Ini adalah catatan ketiga' }
]

app.use(express.json())

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.get('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).send('Catatan tidak ditemukan')
  }
})

app.post('/notes', (req, res) => {
  const note = {
    id: notes.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  notes.push(note)
  res.json(note)
})

app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    note.title = req.body.title
    note.description = req.body.description
    res.json(note)
  } else {
    res.status(404).send('Catatan tidak ditemukan')
  }
})

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.send(`Catatan dengan ID ${id} berhasil dihapus`)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${port}`)
})
