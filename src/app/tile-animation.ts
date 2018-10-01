import { trigger, animate, style, group, query, transition } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';


export const tileAnimation = 
  trigger('tileAnimation', [
    transition('void => *', [
      style({    
        transform: 'scale(0.9) perspective(100vw) translate3d(-1vw, -1vh, 10px) rotateX(10deg) rotateY(-10deg)',
        opacity: '0'}),
      animate('0.4s ease-in-out')
      ]
    ])
  )
]);

export const backGroundAnimation = 
  trigger('backGroundAnimation', [
    transition('void => *', [
      style({ opacity: '0'}),
      animate('0.8s ease-in-out')
      ]
    ])
  )
]);

export const forecastAnimation = 
  trigger('forecastAnimation', [
    transition('void => *', [
      style({
        height: '0',
        opacity: '0'
      }),
      animate('0.4s ease-in-out')
      ]
    ])
  )
]);
