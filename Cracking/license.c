#include <string.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
        if(argc==2) {
		printf("Checking License: %s\n", argv[1]);
		if(strcmp(argv[1], "NOT-THIS-WAY-01")==0) {
			printf("flag{cr4ckh43d!}\n");
		} else {
			printf("Try a different key! or...?\n");
		}
	} else {
		printf("Usage: <key>\n");
	}
	return 0;
}

