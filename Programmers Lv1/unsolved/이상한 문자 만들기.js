function NewFactory2(name) {
  this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
  `삐리비리. 제 이름은 ${this.name}입니다. 주인님.`;
};
