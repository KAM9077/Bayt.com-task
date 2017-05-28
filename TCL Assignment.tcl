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