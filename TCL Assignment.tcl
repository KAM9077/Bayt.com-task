# Sort Function
proc sort {list1} {
 
for { set b 0}  { $b < [expr [llength $list1] - 1] } {incr b} {
	for { set a 0}  { $a < [expr [llength $list1] - 1] } {incr a} {
		if { [lindex $list1 $a ] > [lindex $list1 [expr $a + 1 ]] } {
			set box [lindex $list1 [expr $a + 1 ] ];
			lset list1 [expr $a + 1 ] [lindex $list1 $a]
			lset list1 $a $box
		}

	}
}	

   return $list1
}

# puts [sort {9 8 2 0 5 4 1}]

#_____________________________________________________________________________

# Reverse Procedure
proc ReverseProcedure {list1} {
	for { set a 0}  { $a <= [expr [llength $list1]/2 - [llength $list1]%2/2] -1 } {incr a} {
			set box [lindex $list1 $a ];
			lset list1 $a [lindex $list1 [expr [llength $list1] - $a - 1] ]
			lset list1 [expr [llength $list1] - $a - 1] $box
    }	

   return $list1
}
# puts [ReverseProcedure {9 8 2 0 5 4 1}]








#________________________________________________________________________________
# proc reverse {string} {
# set var "";
# for { set a [expr [string length $string] - 1] }  { $a >= 0 } {incr a -1} {
# 			append var [string index $string $a];
# 		}

#    return $var;
# }

# puts [reverse "Kamal Hajjar"]

