import sys

csv_path = "/Users/macuser/Desktop/JS/12CHIBA.CSV"

def GetAddress():
    postal_code = input("Type target postal code:")
    fp = open(csv_path,"r",encoding="shift_jis")
    for line in fp:
        line = line.replace('','')
        line = line.replace('"','')
        cells = line.split(",")
        code = cells[2]
        pref = cells[6]
        city = cells[7]
        ad = cells[8]
        title = pref + city + ad
        if code.find(postal_code) != -1:
            print(title)
    fp.close()

def GetPostalCode():
    addr = input("Type target address:")
    fp = open(csv_path,"r",encoding="shift_jis")
    for line in fp:
        line = line.replace('','')
        line = line.replace('"','')
        cells = line.split(",")
        code = cells[2]
        pref = cells[6]
        city = cells[7]
        ad = cells[8]
        title = pref + city + ad
        if code.find(postal_code) != -1:
            print(title)
    fp.close()


def main():
    print("\n")
    print("####################################################")
    print("################### FINDADDRESS ####################")
    print("####################################################")
    print("\n")
    print("[DESCRIPTION]")
    print(" This tool is to get address or postal code.")
    print(" If you type '1', you can get unknown address by typing postal code.")
    print(" If you type '2', you can get unknown postal code by typing KEYWORD about address name.")
    print("\n")

    while True:
        print("[OPERATION]")
        print("input the following number which you want toget."
        number = input("[1:Address 2:PostalCode 99(orSPACE):CLOSE]:"))
        if number.isdigit() != 1:
            sys.exit()
        int_number = int(number)
        if int_number == 1:
            GetAddress()
            print("\n")
        elif int_number == 2:
            GetPostalCode()
            print("\n")
        elif int_number == 99:
            sys.exit()
        else:
            print("Invalid Number. Type again.")
            print("\n")

if __name__ == "__main___":
    main()