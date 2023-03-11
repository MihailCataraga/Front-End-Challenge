import React from 'react';
import Key from './Key';
import { AiFillWindows } from "react-icons/ai";
import { IoOptions } from "react-icons/io5";
import { BiDownArrowAlt, BiLeftArrowAlt, BiRightArrowAlt, BiUpArrowAlt } from "react-icons/bi";

export default function Keyboard() {
  return (
    <div className='keyboard d-flex a-center j-center'>
        <div className='left'>
            <div className='firstRow d-flex'>
                <Key class='miniKey' name='ESC' code='Escape' />
                <Key class='miniKey' name='F1' code='F1' />
                <Key class='miniKey' name='F2' code='F2' />
                <Key class='miniKey' name='F3' code='F3' />
                <Key class='miniKey' name='F4' code='F4' />
                <Key class='miniKey' name='F5' code='F5' />
                <Key class='miniKey' name='F6' code='F6' />
                <Key class='miniKey' name='F7' code='F7' />
                <Key class='miniKey' name='F8' code='F8' />
                <Key class='miniKey' name='F9' code='F9' />
                <Key class='miniKey' name='F10' code='F10' />
                <Key class='miniKey' name='F11' code='F11' />
                <Key class='miniKey' name='F12' code='F12' />
            </div>
            <div className='secondRow d-flex'>
                <Key class='key' name='`' secName='~' code='Backquote' />
                <Key class='key' name='1' secName='!' code='Digit1' />
                <Key class='key' name='2' secName='@' code='Digit2' />
                <Key class='key' name='3' secName='#' code='Digit3' />
                <Key class='key' name='4' secName='$' code='Digit4' />
                <Key class='key' name='5' secName='%' code='Digit5' />
                <Key class='key' name='6' secName='^' code='Digit6' />
                <Key class='key' name='7' secName='&' code='Digit7' />
                <Key class='key' name='8' secName='*' code='Digit8' />
                <Key class='key' name='9' secName='(' code='Digit9' />
                <Key class='key' name='0' secName=')' code='Digit0' />
                <Key class='key' name='-' secName='_' code='Minus' />
                <Key class='key' name='=' secName='+' code='Equal' />
                <Key class='deleteKey' name='DELETE' code='Backspace' />
            </div>
            <div className='thirdRow d-flex'>
                <Key class='tabKey' name='TAB' code='Tab' />
                <Key class='key' name='Q' code='KeyQ' />
                <Key class='key' name='W' code='KeyW' />
                <Key class='key' name='E' code='KeyE' />
                <Key class='key' name='R' code='KeyR' />
                <Key class='key' name='T' code='KeyT' />
                <Key class='key' name='Y' code='KeyY' />
                <Key class='key' name='U' code='KeyU' />
                <Key class='key' name='I' code='KeyI' />
                <Key class='key' name='O' code='KeyO' />
                <Key class='key' name='P' code='KeyP' />
                <Key class='key' name='[' secName='{' code='BracketLeft' />
                <Key class='key' name=']' secName='}' code='BracketRight' />
                <Key class='key' name='\' secName='|' code='Backslash' />
            </div>
            <div className='fourthRow d-flex'>
                <Key class='capsKey' name='CAPS' code='CapsLock' />
                <Key class='key' name='A' code='KeyA' />
                <Key class='key' name='S' code='KeyS' />
                <Key class='key' name='D' code='KeyD' />
                <Key class='key' name='F' code='KeyF' />
                <Key class='key' name='G' code='KeyG' />
                <Key class='key' name='H' code='KeyH' />
                <Key class='key' name='J' code='KeyJ' />
                <Key class='key' name='K' code='KeyK' />
                <Key class='key' name='L' code='KeyL' />
                <Key class='key' name=';' secName=':' code='Semicolon' />
                <Key class='key' name="'" secName='"' code='Quote' />
                <Key class='enterKey' name='ENTER' code='Enter' />
            </div>
            <div className='fifthRow d-flex'>
                <Key class='shiftKey' name='SHIFT' code='ShiftLeft' />
                <Key class='key' name='Z' code='KeyZ' />
                <Key class='key' name='X' code='KeyX' />
                <Key class='key' name='C' code='KeyC' />
                <Key class='key' name='V' code='KeyV' />
                <Key class='key' name='B' code='KeyB' />
                <Key class='key' name='N' code='KeyN' />
                <Key class='key' name='M' code='KeyM' />
                <Key class='key' name=',' secName='<' code='Comma' />
                <Key class='key' name='.' secName='>' code='Period' />
                <Key class='key' name="/" secName='?' code='Slash' />
                <Key class='shiftKey' name='SHIFT' code='ShiftRight' />
            </div>
            <div className='sixthRow d-flex'>
                <Key class='ctrlKey' name='CTRL' code='ControlLeft' />
                <Key class='key' name={<AiFillWindows />} code='' />
                <Key class='key' name='ALT' code='AltLeft' />
                <Key class='spaceKey' name=' ' code='Space' />
                <Key class='key' name='ALT' code='AltRight' />
                <Key class='key' name='FN' code='' />
                <Key class='key' name={<IoOptions />} code='ContextMenu' />
                <Key class='ctrlKey' name='CTRL' code='ControlRight' />
            </div>
        </div>
        <div className='right'>
            <div className='firstRow d-flex'>
                <Key class='bigKey' name='PRINT SCREEN' code='' />
                <Key class='bigKey' name='SCROLL LOOK' code='ScrollLock' />
                <Key class='bigKey' name='PAUSE BREAK' code='Pause' />
            </div>
            <div className='secondRow d-flex'>
                <Key class='bigKey' name='INS' code='Insert' />
                <Key class='bigKey' name='HOME' code='Home' />
                <Key class='bigKey' name='PGUP' code='PageUp' />
            </div>
            <div className='thirdRow d-flex'>
                <Key class='bigKey' name='DEL' code='Delete' />
                <Key class='bigKey' name='END' code='End' />
                <Key class='bigKey' name='PGDN' code='PageDown' />
            </div>
            <div className='fourthRow d-flex'>
                <Key class='bigKey' name={<BiUpArrowAlt />} code='ArrowUp' />
            </div>
            <div className='fifthRow d-flex'>
                <Key class='bigKey' name={<BiLeftArrowAlt />} code='ArrowLeft' />
                <Key class='bigKey' name={<BiDownArrowAlt />} code='ArrowDown' />
                <Key class='bigKey' name={<BiRightArrowAlt />} code='ArrowRight' />
            </div>
        </div>
    </div>
  )
}
