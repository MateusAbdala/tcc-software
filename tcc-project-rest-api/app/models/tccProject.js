import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('tccProject', new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill name'
  },
  emailaddress: {
    type: String,
    default: ''
  },
  eixo: {
    type: String,
    default: '',
    required: 'Please fill eixo'
  },
  createdon: {
    type: String,
    default: '',
    required: 'Please fill createdon'
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill phone'
  },
  school: {
    type: String,
    default: '',
    required: 'Please fill school'
  },
  address: {
    type: String,
    default: '',
    required: 'Please fill address'
  },
  estado: {
    type: String,
    default: '',
    required: 'Please fill estado'
  },
  cidade: {
    type: String,
    default: '',
    required: 'Please fill cidade'
  },
  orientador: {
    type: String,
    default: '',
    required: 'Please fill orientador'
  },
  nomeautor1: {
    type: String,
    default: ''
  },
  nomeautor2: {
    type: String,
    default: ''
  },
  nomeautor3: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: 'Descrição padrão(default)...'
  },
  status: {
    type: String,
    default: 'invisivel'
  },
  createdBy: {
    type: String,
    required: 'Please provide the ID of the user who is creating this project'
  }
}))