import './style/style.less';

const div = document.createElement('div');

div.innerHTML = 'webpack';
div.className = 'content';

document.body.appendChild(div);

const add = (a: number, b: number) => a + b;

const promise: Promise<Number> = new Promise((resolve) => {
  resolve(1);
});

promise.then((res) => {
  console.log(res);
});
