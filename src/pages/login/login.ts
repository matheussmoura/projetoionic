import { HomePage } from './../home/home';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular'
import { CadastroPage } from '../cadastro/cadastro'
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String
  senha: String
  urlImage: String = 'assets/imgs/user.svg'
  isUsuarioValido: boolean = false
  nomeUsuario: String = ''
  dados: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuarioProvider: UsuarioProvider,
    public storage: Storage, 
    public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('O ionViewDidLoad é executado quando carregar')

    // verifico ao carregar, se o usuário está logado
    this.storage.get('logado').then((data) => {
      if (data) {
        console.log(data)
        // Ativar o menu lateral
        this.menu.swipeEnable(true, 'menuMain')
        // se estiver logado, mova ele para pagina home
        this.navCtrl.setRoot(HomePage)
      } else {
        // Desativar o menu lateral
        this.menu.swipeEnable(false, 'menuMain')
      }
    })
  }

abrirCadastro() {
  this.navCtrl.push(CadastroPage)
}

buscarUserGithub() {
  this.usuarioProvider.buscarUserGithub(this.email).then((data: any) => {
    if (data.avatar_url) {
      //se o usuário existir faça isso
      this.urlImage = data.avatar_url
      this.nomeUsuario = data.name
      this.isUsuarioValido = true
      console.log(data)
    } else {
      this.isUsuarioValido = false
      this.urlImage = 'assets/imgs/user.svg'
    }
  })
}

  fazerLogin(){
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
    elementoBotao.innerText = 'ENTRANDO...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'
    setTimeout(() => {
    if(this.senha == 'admin'){
      console.log('Logado!')
      this.navCtrl.setRoot(HomePage)
    }else{
      console.log('E-mail ou senha inválidos')
    }
    elementoBotao.innerText = 'ENTRAR'
    elementoBotao.style.background = corAntiga
  }, 3000)
}

}
