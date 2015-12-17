bi = str(raw_input("Binary:"))
l = len(bi)
error = 0
de = 0
for c in range(l):
	if bi[c] != "0" and bi[c]!= "1":
		print "Error Input"
		error = 1
		break

if error !=1:
	for i in range(l):
		l-=1
		de += int(bi[l])*2**i
	print "Decimal:",de	