CR equ 13;retorno de carro

LF equ 0Ah;inicio de linea

Datos Segment

  Mensaje db CR,LF,'Hola Mundo?',CR,LF,'$';el signo de pesos indica que termina el final de los cracteres
  
  Datos Ends
  
  Pila Segment Stack
        
      db 64 DUP ('PILA')
      
Pila Ends

Codigo Segment
 
     holam proc far
     
     Assume CS:Codigo,DS:Datos,SS:pila
     
     mov ax,Datos
     
     mov ds,ax
     
     lea dx,Mensaje
     
     mov ah,9
     
     int 21h