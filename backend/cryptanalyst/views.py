from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# from .models import Product
# from .serializers import ProductSerializer
# Create your views here.


@api_view(['POST'])
def ceaser_encrypt(request):
    context = {}
    result = ""
    # transverse the plain txt
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t)
    key = int(k)
    for i in range(len(text)):
        char = text[i]

        # check if space is there then simply add space
        if char == " ":
            result += " "
        # encrypt uppercase characters in plain txt
        elif char.isupper():
            result += chr((ord(char) + key - 65) % 26 + 65)

        # encrypt lowercase characters in plain txt
        else:
            result += chr((ord(char) + key - 97) % 26 + 97)

    # context["data"] = result
    return Response(result)


@api_view(['POST'])
def ceaser_decrypt(request):
    context = {}
    result = ""
    # transverse the plain txt
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t)
    key = int(k)
    for i in range(len(text)):
        char = text[i]

        # check if space is there then simply add space
        if char == " ":
            result += " "
        # encrypt uppercase characters in plain txt
        elif char.isupper():
            result += chr((ord(char) - key - 65) % 26 + 65)

        # encrypt lowercase characters in plain txt
        else:
            result += chr((ord(char) - key - 97) % 26 + 97)

    # context["data"] = result
    return Response(result)


@api_view(['POST'])
def rail_encrypt(request):
    context = {}
    result = ""
    # transverse the plain txt
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t)
    key = int(k)
    # remove all white spaces in text
    plain_text = text.replace(" ", "")

    # change plain text to upper case
    plain_text = plain_text.upper()

    # divide plain text into key number of strings
    rail = [""] * key
    layer = 0
    for character in plain_text:
        rail[layer] += character
        if layer >= key - 1:
            layer = 0
        else:
            layer += 1

    cipher = "".join(rail)
    return Response(cipher)


@api_view(['POST'])
def rail_decrypt(request):
    result = ""
    # transverse the plain txt
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t).replace(" ", "")
    key = int(k)
    rail = [['\n' for i in range(len(text))]
            for j in range(key)]

    # to find the direction
    dir_down = None
    row, col = 0, 0

    # mark the places with '*'
    for i in range(len(text)):
        if row == 0:
            dir_down = True
        if row == key - 1:
            dir_down = False

        # place the marker
        rail[row][col] = '*'
        col += 1

        # find the next row
        # using direction flag
        if dir_down:
            row += 1
        else:
            row -= 1

    # now we can construct the
    # fill the rail matrix
    index = 0
    for i in range(key):
        for j in range(len(text)):
            if ((rail[i][j] == '*') and
                    (index < len(text))):
                rail[i][j] = text[index]
                index += 1

    # now read the matrix in
    # zig-zag manner to construct
    # the resultant text
    result = []
    row, col = 0, 0
    for i in range(len(text)):

        # check the direction of flow
        if row == 0:
            dir_down = True
        if row == key-1:
            dir_down = False

        # place the marker
        if (rail[row][col] != '*'):
            result.append(rail[row][col])
            col += 1

        # find the next row using
        # direction flag
        if dir_down:
            row += 1
        else:
            row -= 1

    return Response("".join(result))


# Vignere Cipher
@api_view(['POST'])
def vignereEncrypt(request):  # Encryption
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t).replace(" ", "").lower()
    key = str(k).replace(" ", "").lower()
    cip = []
    start = ord('a')
    for l, k in zip(text, key):
        shift = ord(k) - start
        pos = start + (ord(l) - start + shift) % 26
        cip.append(chr(pos))
    return Response(''.join([l for l in cip]))


@api_view(['POST'])
def vignereDecrypt(request):  # Decryption
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t).replace(" ", "").lower()
    key = str(k).replace(" ", "").lower()
    cip = []
    start = ord('a')
    for l, k in zip(text, key):
        shift = ord(k) - start
        pos = start + (ord(l) - start - shift) % 26
        cip.append(chr(pos))
    return Response(''.join([l for l in cip]))


@api_view(['POST'])
def vernamEncrypt(request):
    # Initializing cipherText
    cipherText = ""
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t).replace(" ", "").upper()
    key = str(k).replace(" ", "").upper()
    # Initialize cipher array of key length
    # which stores the sum of corresponding no.'s
    # of plainText and key.
    cipher = []
    for i in range(len(key)):
        cipher.append(ord(text[i]) - ord('A') + ord(key[i])-ord('A'))

    # If the sum is greater than 25
    # subtract 26 from it
    # and store that resulting value
    for i in range(len(key)):
        if cipher[i] > 25:
            cipher[i] = cipher[i] - 26

    # Converting the no.'s into integers
    # Convert these integers to corresponding
    # characters and add them up to cipherText

    for i in range(len(key)):
        x = cipher[i] + ord('A')
        cipherText += chr(x)

    # Returning the cipherText
    return Response(cipherText)


@api_view(['POST'])
def vernamDecrypt(request):
    # Initializing plain text
    plainText = ""
    t = request.data.get('text')
    k = request.data.get('key')
    text = str(t).replace(" ", "").upper()
    key = str(k).replace(" ", "").upper()
    # Initializing integer array of key length
    # which stores difference
    # of corresponding no.'text of
    # each character of cipherText and key

    plain = []

    # Running for loop for each character
    # subtracting and storing in the array

    for i in range(len(key)):
        plain.append(ord(text[i]) - ord('A') - (ord(key[i]) - ord('A')))

    # If the difference is less than 0
    # add 26 and store it in the array.
    for i in range(len(key)):
        if (plain[i] < 0):
            plain[i] = plain[i] + 26

    # Converting int to corresponding char
    # add them up to plainText

    for i in range(len(key)):
        x = plain[i] + ord('A')
        plainText += chr(x)

    # Returning plainText
    return Response(plainText)


# Modulus
@api_view(['POST'])
def positive_mod(request):
    context = {}
    result = ""
    # transverse the plain txt
    t = request.data.get('text')
    k = request.data.get('key')
    IntegerValue = int(t)
    ModuloValue = int(k)
    result = IntegerValue % ModuloValue
    return Response(result)


@api_view(['POST'])
def negative_mod(request):
    context = {}
    result = ""
    # transverse the txt
    t = request.data.get('text')
    k = request.data.get('key')
    IntegerValue = int(t)
    ModuloValue = int(k)
    result = (((IntegerValue % ModuloValue) +
              ModuloValue) % ModuloValue)
    return Response(result)
