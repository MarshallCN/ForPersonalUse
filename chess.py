__author__ = 'Marshall'
board =[['  ','1','  2','  3','  4','  5','  6','  7','  8','  9', '', '', '', '', '']]
for x in range(1,10):
    board.append(["%s" % x, ' ~ ',' ~ ',' ~ ',' ~ ',' ~ ',' ~ ',' ~ ',' ~ ',' ~ ','','','','',''])
def print_b():
    for row in board:
        print "".join(row)

print "~~~Welcome to the Chess Game~~~"
print_b()
#board
name1=raw_input("Player1 name:")
print "Hello", name1
print "================VS================="
name2=raw_input("Player2 name:")
print "Hello", name2
#default player1
#name
text=raw_input("Are You Ready? Press Enter...")
if text != "quit":
    print name1,"and",name2,"Let's start the GAME!"
else:
    print "No Way! Never Give Up!"
t=1
for turn in range(1,41):
 while True:
    print "(X)Player: %s Turn "%(name1)+"%i" %(turn)
    p1_row=int(raw_input("row:"))
    p1_col=int(raw_input("col:"))
    if p1_row < 1 or p1_row > 9 or p1_col < 1 or p1_col > 9:
        print "Not in Board"
        continue
    elif board[p1_row][p1_col]== " X "or board[p1_row][p1_col]== " O ":
        print "Try again"
        continue
    else:
        print "Step:",t
        print "============================"
        board[p1_row][p1_col]= " X "
        print_b()
        t=t+1
        break

 if board[p1_row][p1_col+1]==board[p1_row][p1_col+2]==board[p1_row][p1_col +3]==board[p1_row][p1_col+4]==" X " or \
board[p1_row][p1_col -1] == board[p1_row][p1_col +1] ==board[p1_row][p1_col +2]==board[p1_row][p1_col +3]==" X " or\
board[p1_row][p1_col-1]==board[p1_row][p1_col-2]==board[p1_row][p1_col +1]==board[p1_row][p1_col+2]==" X "or\
board[p1_row][p1_col-1]==board[p1_row][p1_col-2]==board[p1_row][p1_col-3]==board[p1_row][p1_col+1]==" X "or\
board[p1_row][p1_col-1]==board[p1_row][p1_col-2]==board[p1_row][p1_col-3]==board[p1_row][p1_col-4]==" X ":
    print "(X)Player:%s Win"% name1
    break
     #if 5 x in row
 elif (p1_row<6 and board[p1_row+1][p1_col]==board[p1_row+2][p1_col]==board[p1_row+3][p1_col]==board[p1_row+4][p1_col]==" X ") or \
(p1_row < 7 and board[p1_row-1][p1_col]==board[p1_row+1][p1_col]==board[p1_row+2][p1_col]==board[p1_row+3][p1_col]==" X ") or \
(p1_row < 8 and board[p1_row-1][p1_col]==board[p1_row-2][p1_col]==board[p1_row+1][p1_col]==board[p1_row+2][p1_col]==" X ") or \
(p1_row < 9 and board[p1_row-1][p1_col]==board[p1_row-2][p1_col]==board[p1_row-3][p1_col]==board[p1_row+1][p1_col]==" X ") or \
board[p1_row-1][p1_col]==board[p1_row-2][p1_col]==board[p1_row-3][p1_col]==board[p1_row-4][p1_col]==" X ":
    print "(X)Player:%s Win" % name1
    break
 elif (p1_row<6 and board[p1_row+1][p1_col+1]==board[p1_row+2][p1_col+2]==board[p1_row+3][p1_col+3]==board[p1_row+4][p1_col+4]==" X ") or \
(p1_row < 7 and board[p1_row-1][p1_col-1]==board[p1_row+1][p1_col+1]==board[p1_row+2][p1_col+2]==board[p1_row+3][p1_col+3]==" X ") or \
(p1_row < 8 and board[p1_row-1][p1_col-1]==board[p1_row-2][p1_col-2]==board[p1_row+1][p1_col+1]==board[p1_row+2][p1_col+2]==" X ") or \
(p1_row < 9 and board[p1_row-1][p1_col-1]==board[p1_row-2][p1_col-2]==board[p1_row-3][p1_col-3]==board[p1_row+1][p1_col+1]==" X ") or \
board[p1_row-1][p1_col-1]==board[p1_row-2][p1_col-2]==board[p1_row-3][p1_col-3]==board[p1_row-4][p1_col-4]==" X ":
    print "(X)Player:%s Win" % name1
    break

 while True:
    print "(O)Player: %s Turn "% name2 + " % i " % turn
    p2_row=int(raw_input("row:"))
    p2_col=int(raw_input("col:"))
    if p2_row < 1 or p2_row > 9 or p2_col < 1 or p2_col > 9:
        print "Not in Board"
        continue
    elif board[p2_row][p2_col]== " X "or board[p2_row][p2_col]== " O ":
        print "Try again"
        continue
    else:
       print "Step:",t
       print "============================"
       board[p2_row][p2_col]= " O "
       print_b()
       t=t+1
       break

 if board[p2_row][p2_col+1]==board[p2_row][p2_col+2]==board[p2_row][p2_col +3]==board[p2_row][p2_col+4]==" O " or \
board[p2_row][p2_col -1] == board[p2_row][p2_col +1] ==board[p2_row][p2_col +2]==board[p2_row][p2_col +3]==" O " or\
board[p2_row][p2_col-1]==board[p2_row][p2_col-2]==board[p2_row][p2_col +1]==board[p2_row][p2_col+2]==" O "or\
board[p2_row][p2_col-1]==board[p2_row][p2_col-2]==board[p2_row][p2_col-3]==board[p2_row][p2_col+1]==" O "or\
board[p2_row][p2_col-1]==board[p2_row][p2_col-2]==board[p2_row][p2_col-3]==board[p2_row][p2_col-4]==" O ":
    print "(O)Player:%s Win"% name2
    break
     #if 5 O in row
 elif (p2_row<6 and board[p2_row+1][p2_col]==board[p2_row+2][p2_col]==board[p2_row+3][p2_col]==board[p2_row+4][p2_col]==" O ") or \
(p2_row < 7 and board[p2_row-1][p2_col]==board[p2_row+1][p2_col]==board[p2_row+2][p2_col]==board[p2_row+3][p2_col]==" O ") or \
(p2_row < 8 and board[p2_row-1][p2_col]==board[p2_row-2][p2_col]==board[p2_row+1][p2_col]==board[p2_row+2][p2_col]==" O ") or \
(p2_row < 9 and board[p2_row-1][p2_col]==board[p2_row-2][p2_col]==board[p2_row-3][p2_col]==board[p2_row+1][p2_col]==" O ") or \
board[p2_row-1][p2_col]==board[p2_row-2][p2_col]==board[p2_row-3][p2_col]==board[p2_row-4][p2_col]==" O ":
    print "(O)Player:%s Win" % name2
    break
 elif (p2_row<6 and board[p2_row+1][p2_col+1]==board[p2_row+2][p2_col+2]==board[p2_row+3][p2_col+3]==board[p2_row+4][p2_col+4]==" O ") or \
(p2_row < 7 and board[p2_row-1][p2_col-1]==board[p2_row+1][p2_col+1]==board[p2_row+2][p2_col+2]==board[p2_row+3][p2_col+3]==" O ") or \
(p2_row < 8 and board[p2_row-1][p2_col-1]==board[p2_row-2][p2_col-2]==board[p2_row+1][p2_col+1]==board[p2_row+2][p2_col+2]==" O ") or \
(p2_row < 9 and board[p2_row-1][p2_col-1]==board[p2_row-2][p2_col-2]==board[p2_row-3][p2_col-3]==board[p2_row+1][p2_col+1]==" O ") or \
board[p2_row-1][p2_col-1]==board[p2_row-2][p2_col-2]==board[p2_row-3][p2_col-3]==board[p2_row-4][p2_col-4]==" O ":
    print "(O)Player:%s Win" % name2
    break






