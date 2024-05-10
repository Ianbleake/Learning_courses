lista_original=[1,2,3,4,5,6,7,8,9,10]

def reves(lista):
    inicio=0
    fin=len(lista) -1 #el menos uno es por que la indexacion empieza a contar desde 0 por lo que el final de la lista sera siempre 1 en la indexacion en comparacion con el largo

    while inicio < fin:
        lista[inicio],lista[fin] = lista[fin],lista[inicio]

        inicio+=1
        fin-=1

    return lista

print(reves(lista_original))
