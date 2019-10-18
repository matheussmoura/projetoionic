
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { LoginPage } from '../login/login'
import { HomePage } from '../home/home'


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  email: String
  senha: String
  nome: String
  dtNascimento: Date

  cep: String
  bairro: String
  rua: String
  estado: String

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage')
   
  }

cadastrar() {
  this.navCtrl.setRoot(HomePage)
}

buscarCep() {
  this.usuarioProvider.buscarEnderecoViaCep(this.cep).then((data: any) =>{
    this.bairro = data.bairro
    this.rua = data.logradouro
    this.estado = data.localidade
    this.cep = data.Cep

    console.log(data)
  })
}
jaPossuoConta() {
  this.navCtrl.push(LoginPage)
}
}