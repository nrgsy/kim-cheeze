# Using the following links as reference
# https://thehackerdiary.wordpress.com/2017/04/21/exploring-devinput-1/
# https://www.kernel.org/doc/Documentation/input/input.txt

import struct 

f = open( "/dev/input/event19", "rb" ); 
# Open the file in the read-binary mode
# The file is linked to mouse input specific to Phil's computer
# Change '/dev/input/event19' to your input stream to recreate it

while 1:
  data = f.read(24)  # Reads data bytes in input device stream
  time =  struct.unpack('4I',data[:16])  # Reads first 16 bytes for time data
  data_type = struct.unpack('2b', data[16:18]) # Reads data_type
  code = struct.unpack('2b', data[18:20]) # Reads code
  value = struct.unpack('4b', data[20:]) # Reads event value

  print "Time: "+ str(time[0]) +":"+str(time[2])
  print "Type: "+ str(data_type)
  print "Code: "+ str(code)
  print "Value: "+ str(value)+"\n"