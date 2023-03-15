import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() {

  }
  newAlert = () => {
    let alertDivPrinc = document.getElementById('default-alert');
    if (alertDivPrinc){
          alertDivPrinc.classList.add('transform', 'ease-out', 'duration-300', 'transition');
          alertDivPrinc.classList.add('translate-y-2', 'opacity-0', 'sm:translate-y-0', 'sm:translate-x-2');
          setTimeout((alertDivPrinc2 = alertDivPrinc)=>{
            if(alertDivPrinc2){
              alertDivPrinc2.classList.add('translate-y-0', 'opacity-100', 'sm:translate-x-0');

            }

          },1000)
          setTimeout((alertDivPrinc2 = alertDivPrinc)=>{
            if(alertDivPrinc2){
              alertDivPrinc2.classList.remove('opacity-100');
              alertDivPrinc2.classList.add('opacity-0');

            }

          },2000)
    }


    // alertDivPrinc.style.display = 'none';
    // Entering: "transform ease-out duration-300 transition"
        // From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        // To: "translate-y-0 opacity-100 sm:translate-x-0"
      // Leaving: "transition ease-in duration-100"
        // From: "opacity-100"
        // To: "opacity-0"
  }

  alertTestDOM = () => {
    let divTest = document.createElement('div');
    divTest.classList.add('pointer-events-none');
    divTest.classList.add('fixed');
    divTest.classList.add('inset-0');
    divTest.classList.add('flex');
    divTest.classList.add('items-end');
    divTest.classList.add('px-4');
    divTest.classList.add('py-6');
    divTest.classList.add('sm:items-start');
    divTest.classList.add('sm:p-6');
  }

  alertTest = (
    alertTitle: string,
    alertDescription: string
    ) => {
    let div1 = document.createElement('div');
    div1.setAttribute('aria-live', 'assertive');
    div1.classList.add('pointer-events-none', 'fixed inset-0', 'flex', 'items-end', 'px-4', 'py-6', 'sm:items-start', 'sm:p-6');

    let div2 = document.createElement('div');
    div1.appendChild(div2);
    div2.classList.add('flex', 'w-full', 'flex-col', 'items-center', 'space-y-4', 'sm:items-end')

    let div3 = document.createElement('div');
    div2.appendChild(div3);
    div3.classList.add('pointer-events-auto', 'w-full', 'max-w-sm', 'overflow-hidden', 'rounded-lg', 'bg-white', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5');

    let div4 = document.createElement('div');
    div3.appendChild(div4);
    div4.classList.add('p-4');

    let div5 = document.createElement('div');
    div4.appendChild(div5);
    div5.classList.add('flex', 'items-start');

    let div5_1 = document.createElement('div');
    div5.appendChild(div5_1);
    div5_1.classList.add('flex-shrink-0');
    let svg = document.createElement('svg');
    div5_1.appendChild(svg);
    svg.classList.add('h-6', 'w-6', 'text-green-400');
    let svgAttributes = {
      'fill': ['none'],
      'viewBox': ['0','0','24','24'],
      'stroke-width': ['1.5'],
      'stroke': ['currentColor'],
      'aria-hidden': ['true']
    }
    for(const [key, values] of Object.entries(svgAttributes)){
      values.forEach((value:any)=>{
        svg.setAttribute(key, value);
      })
    }
    let path1 = document.createElement('path');
    svg.appendChild(path1);

    let pathAttributes = {
      'stroke-linecap': ['round'],
      'stroke-linejoin': ['round'],
      'd': ['M9','12.75L11.25','15','15','9.75M21','12a9','9','0','11-18','0','9','9','0','0118','0z']
    }
    for(const [key, values] of Object.entries(pathAttributes)){
      values.forEach((value:any)=>{
        path1.setAttribute(key, value);
      })
    }
    let div5_2 = document.createElement('div');
    div5.appendChild(div5_2);
    div5_2.classList.add('ml-3', 'w-0', 'flex-1', 'pt-0.5');

    let div_5_2__p_1 = document.createElement('p');
    div5_2.appendChild(div_5_2__p_1);
    div_5_2__p_1.classList.add('text-sm', 'font-medium', 'text-gray-900');
    div_5_2__p_1.setAttribute('[innerHTML]', alertTitle)

    let div_5_2__p_2 = document.createElement('p');
    div_5_2__p_1.appendChild(div_5_2__p_2);
    div_5_2__p_2.classList.add('mt-1', 'text-sm', 'text-gray-500');
    div_5_2__p_1.setAttribute('[innerHTML]', alertDescription);

    let div5_3 = document.createElement('div');
    div5.appendChild(div5_3);
    div5_3.classList.add('ml-4', 'flex', 'flex-shrink-0');

    let div5_3__btn_1 = document.createElement('button');
    div5_3.appendChild(div5_3__btn_1);
    div5_3__btn_1.setAttribute('type', 'button');
    div5_3__btn_1.setAttribute('(click)', 'closeMethod()');
    div5_3__btn_1.classList.add('inline-flex', 'rounded-md', 'bg-white text-gray-400', 'hover:text-gray-500', 'focus:outline-none', 'focus:ring-2', 'focus:ring-indigo-500', 'focus:ring-offset-2');

    let div5_3__btn_1__span_1 = document.createElement('span');
    div5_3__btn_1.appendChild(div5_3__btn_1__span_1);
    div5_3__btn_1__span_1.classList.add('sr-only');
    div5_3__btn_1__span_1.setAttribute('[innerHTML]', 'Fermer');

    let div5_3__btn_1__svg_1 = document.createElement('svg');
    div5_3__btn_1.appendChild(div5_3__btn_1__svg_1);
    div5_3__btn_1__svg_1.classList.add('h-5', 'w-5');

    let div5_3__btn_1__svg_1Attibutes = {
      'viewBox' : ['0', '0', '20', '20'],
      'fill': ['currentColor'],
      'aria-hidden':['true']
    }
    for(const [key, values] of Object.entries(div5_3__btn_1__svg_1Attibutes)){
      values.forEach((value:any)=>{
        div5_3__btn_1__svg_1.setAttribute(key, value);
      })
    }
    let div5_3__btn_1__svg_1__path = document.createElement('path');
    div5_3__btn_1__svg_1.appendChild(div5_3__btn_1__svg_1__path);


    let div5_3__btn_1__svg_1__pathAttributes = {
      'd': ['M6.28','5.22a.75.75','0','00-1.06','1.06L8.94','10l-3.72','3.72a.75.75','0','101.06','1.06L10','11.06l3.72','3.72a.75.75','0','101.06-1.06L11.06','10l3.72-3.72a.75.75','0','00-1.06-1.06L10','8.94','6.28','5.22z']
    }

    for(const [key, values] of Object.entries(div5_3__btn_1__svg_1__pathAttributes)){
      values.forEach((value:any)=>{
        div5_3__btn_1__svg_1__path.setAttribute(key, value);
      })
    }
  }
  closeMethod = () => {

  }
}
