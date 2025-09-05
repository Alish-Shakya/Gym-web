// 1 create a single process and display theri id 


/*
#include <stdio.h>
#include <unistd.h>

int main(void)
{
    printf("Hello World!\n");
    fork( );
    printf("I am after forking\n");
    printf("\tI am process %d. \n", getpid( ));
}
*/


//Program getting an id of a process

/*
#include <stdio.h>
#include <unistd.h>   // For getpid(), getppid()

int main() {
    pid_t pid = getpid();   // Current process ID
    pid_t ppid = getppid(); // Parent process ID

    printf("Current Process ID (PID): %d\n", pid);
    printf("Parent Process ID (PPID): %d\n", ppid);

    return 0;
}
*/

// 2 program of multiple fork()

/*
#include <stdio.h>
#include <unistd.h>

int main() {
    printf("Program started. PID: %d\n", getpid());

    fork();  // First fork
    fork();  // Second fork

    printf("Hello from process PID: %d, PPID: %d\n", getpid(), getppid());

    return 0;
}
*/


// 3 Thread creation

/*
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

// Function to be executed by the thread
void* myThreadFunction(void* arg) {
    int id = *(int*)arg;
    printf("Hello from thread %d! PID: %d\n", id, getpid());
    return NULL;
}

int main() {
    pthread_t thread1, thread2;
    int t1_id = 1, t2_id = 2;

    // Create threads
    pthread_create(&thread1, NULL, myThreadFunction, &t1_id);
    pthread_create(&thread2, NULL, myThreadFunction, &t2_id);

    // Wait for threads to finish
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Main program finished. PID: %d\n", getpid());
    return 0;
}
*/


// 4 Implement IPC technique 

/*
#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main() {
    int fd[2]; // fd[0] for reading, fd[1] for writing
    char message[] = "Hello from parent!";
    char buffer[100];

    // Create a pipe
    if (pipe(fd) == -1) {
        perror("pipe failed");
        return 1;
    }

    pid_t pid = fork(); // Create a child process

    if (pid < 0) {
        perror("fork failed");
        return 1;
    }

    if (pid > 0) { // Parent process
        close(fd[0]); // Close reading end
        write(fd[1], message, strlen(message)+1);
        close(fd[1]); // Close writing end
    } else { // Child process
        close(fd[1]); // Close writing end
        read(fd[0], buffer, sizeof(buffer));
        printf("Child received: %s\n", buffer);
        close(fd[0]); // Close reading end
    }

    return 0;
}

*/


// 5.1 Simulate process Scheduling algorithm

/*
#include <stdio.h>

int main() {
    int n, i;
    printf("Enter number of processes: ");
    scanf("%d", &n);

    int burst_time[n], waiting_time[n], turnaround_time[n];
    int total_waiting = 0, total_turnaround = 0;

    // Input burst times
    for (i = 0; i < n; i++) {
        printf("Enter burst time for process %d: ", i + 1);
        scanf("%d", &burst_time[i]);
    }

    // Calculate waiting time
    waiting_time[0] = 0; // First process has no waiting
    for (i = 1; i < n; i++) {
        waiting_time[i] = waiting_time[i - 1] + burst_time[i - 1];
    }

    // Calculate turnaround time
    for (i = 0; i < n; i++) {
        turnaround_time[i] = waiting_time[i] + burst_time[i];
    }

    printf("\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n");
    for (i = 0; i < n; i++) {
        printf("%d\t%d\t\t%d\t\t%d\n", i + 1, burst_time[i], waiting_time[i], turnaround_time[i]);
        total_waiting += waiting_time[i];
        total_turnaround += turnaround_time[i];
    }

    printf("\nAverage Waiting Time: %.2f\n", (float)total_waiting / n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround / n);

    return 0;
}
*/

// 5.2 Simulating first come first served(FCFS) fifo scheduling algorithm in C

/*
#include <stdio.h>

int main() {
    int n, i;
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    int burst_time[n], waiting_time[n], turnaround_time[n];
    int total_waiting = 0, total_turnaround = 0;

    // Input burst times
    for (i = 0; i < n; i++) {
        printf("Enter burst time for process P%d: ", i + 1);
        scanf("%d", &burst_time[i]);
    }

    // FCFS Waiting Time calculation
    waiting_time[0] = 0; // First process has no waiting
    for (i = 1; i < n; i++) {
        waiting_time[i] = waiting_time[i - 1] + burst_time[i - 1];
    }

    // Turnaround Time calculation
    for (i = 0; i < n; i++) {
        turnaround_time[i] = waiting_time[i] + burst_time[i];
    }

    // Display results
    printf("\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n");
    for (i = 0; i < n; i++) {
        printf("P%d\t%d\t\t%d\t\t%d\n", i + 1, burst_time[i], waiting_time[i], turnaround_time[i]);
        total_waiting += waiting_time[i];
        total_turnaround += turnaround_time[i];
    }

    printf("\nAverage Waiting Time: %.2f\n", (float)total_waiting / n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround / n);

    return 0;
}
*/

// 6 Simulate SJF shortest Job first scheduling job in c

/*

#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter number of processes: ");
    scanf("%d", &n);

    int burst_time[n], waiting_time[n], turnaround_time[n], temp;
    int total_waiting = 0, total_turnaround = 0;

    // Input burst times
    for (i = 0; i < n; i++) {
        printf("Enter burst time for process P%d: ", i + 1);
        scanf("%d", &burst_time[i]);
    }

    // Sort processes by burst time (SJF)
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (burst_time[i] > burst_time[j]) {
                // Swap burst times
                temp = burst_time[i];
                burst_time[i] = burst_time[j];
                burst_time[j] = temp;
            }
        }
    }

    // Calculate waiting time
    waiting_time[0] = 0; // First process has no waiting
    for (i = 1; i < n; i++) {
        waiting_time[i] = waiting_time[i - 1] + burst_time[i - 1];
    }

    // Calculate turnaround time
    for (i = 0; i < n; i++) {
        turnaround_time[i] = waiting_time[i] + burst_time[i];
    }

    // Display results
    printf("\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n");
    for (i = 0; i < n; i++) {
        printf("P%d\t%d\t\t%d\t\t%d\n", i + 1, burst_time[i], waiting_time[i], turnaround_time[i]);
        total_waiting += waiting_time[i];
        total_turnaround += turnaround_time[i];
    }

    printf("\nAverage Waiting Time: %.2f\n", (float)total_waiting / n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround / n);

    return 0;
}
*/



// 7 Simulate Round Rbin Scheduling algorithn in c

/*
#include <stdio.h>

int main() {
    int n, i, j, time = 0, remain;
    int quantum;
    
    printf("Enter number of processes: ");
    scanf("%d", &n);

    int burst_time[n], remaining_time[n], waiting_time[n], turnaround_time[n];

    // Input burst times
    for (i = 0; i < n; i++) {
        printf("Enter burst time for process P%d: ", i + 1);
        scanf("%d", &burst_time[i]);
        remaining_time[i] = burst_time[i]; // Initially remaining time = burst time
        waiting_time[i] = 0;
        turnaround_time[i] = 0;
    }

    printf("Enter time quantum: ");
    scanf("%d", &quantum);

    int done;
    do {
        done = 1; // Assume all processes are done
        for (i = 0; i < n; i++) {
            if (remaining_time[i] > 0) {
                done = 0; // There is still a process to execute
                if (remaining_time[i] > quantum) {
                    time += quantum;
                    remaining_time[i] -= quantum;
                } else {
                    time += remaining_time[i];
                    waiting_time[i] = time - burst_time[i];
                    remaining_time[i] = 0;
                }
            }
        }
    } while (!done);

    // Calculate turnaround time
    for (i = 0; i < n; i++) {
        turnaround_time[i] = burst_time[i] + waiting_time[i];
    }

    // Display results
    printf("\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n");
    int total_waiting = 0, total_turnaround = 0;
    for (i = 0; i < n; i++) {
        printf("P%d\t%d\t\t%d\t\t%d\n", i + 1, burst_time[i], waiting_time[i], turnaround_time[i]);
        total_waiting += waiting_time[i];
        total_turnaround += turnaround_time[i];
    }

    printf("\nAverage Waiting Time: %.2f\n", (float)total_waiting / n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround / n);

    return 0;
}
*/


// 8 Simulating Cpu scheduling priority algorithm

/*
#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter number of processes: ");
    scanf("%d", &n);

    int burst_time[n], priority[n], waiting_time[n], turnaround_time[n], temp;

    // Input burst times and priorities
    for (i = 0; i < n; i++) {
        printf("Enter burst time for process P%d: ", i + 1);
        scanf("%d", &burst_time[i]);
        printf("Enter priority for process P%d (lower number = higher priority): ", i + 1);
        scanf("%d", &priority[i]);
    }

    // Sort processes according to priority (lowest number first)
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (priority[i] > priority[j]) {
                // Swap priority
                temp = priority[i];
                priority[i] = priority[j];
                priority[j] = temp;

                // Swap burst times accordingly
                temp = burst_time[i];
                burst_time[i] = burst_time[j];
                burst_time[j] = temp;
            }
        }
    }

    // 9 Calculate waiting time
    waiting_time[0] = 0;
    for (i = 1; i < n; i++) {
        waiting_time[i] = waiting_time[i - 1] + burst_time[i - 1];
    }

    // Calculate turnaround time
    for (i = 0; i < n; i++) {
        turnaround_time[i] = waiting_time[i] + burst_time[i];
    }

    // Display results
    printf("\nProcess\tBurst Time\tPriority\tWaiting Time\tTurnaround Time\n");
    int total_waiting = 0, total_turnaround = 0;
    for (i = 0; i < n; i++) {
        printf("P%d\t%d\t\t%d\t\t%d\t\t%d\n", i + 1, burst_time[i], priority[i], waiting_time[i], turnaround_time[i]);
        total_waiting += waiting_time[i];
        total_turnaround += turnaround_time[i];
    }

    printf("\nAverage Waiting Time: %.2f\n", (float)total_waiting / n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround / n);

    return 0;
}
*/


// 10 Write a C program to simulate producer consumer peoblem using semaphires 

/*
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty;  // Counts empty slots
sem_t full;   // Counts full slots
pthread_mutex_t mutex; // Mutex for mutual exclusion

void* producer(void* arg) {
    int item, i;
    for (i = 0; i < 10; i++) { // Produce 10 items
        item = i + 1;

        sem_wait(&empty);             // Wait if buffer is full
        pthread_mutex_lock(&mutex);   // Lock buffer

        buffer[in] = item;
        printf("Producer produced: %d at index %d\n", item, in);
        in = (in + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex); // Unlock buffer
        sem_post(&full);              // Signal that buffer has new item

        sleep(1); // Simulate production time
    }
    return NULL;
}

void* consumer(void* arg) {
    int item, i;
    for (i = 0; i < 10; i++) { // Consume 10 items
        sem_wait(&full);            // Wait if buffer is empty
        pthread_mutex_lock(&mutex); // Lock buffer

        item = buffer[out];
        printf("Consumer consumed: %d from index %d\n", item, out);
        out = (out + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex); // Unlock buffer
        sem_post(&empty);             // Signal empty slot available

        sleep(2); // Simulate consumption time
    }
    return NULL;
}

int main() {
    pthread_t prod_thread, cons_thread;

    // Initialize semaphores
    sem_init(&empty, 0, BUFFER_SIZE); // Initially buffer has BUFFER_SIZE empty slots
    sem_init(&full, 0, 0);            // Initially buffer has 0 full slots
    pthread_mutex_init(&mutex, NULL);

    // Create threads
    pthread_create(&prod_thread, NULL, producer, NULL);
    pthread_create(&cons_thread, NULL, consumer, NULL);

    // Wait for threads to finish
    pthread_join(prod_thread, NULL);
    pthread_join(cons_thread, NULL);

    // Destroy semaphores and mutex
    sem_destroy(&empty);
    sem_destroy(&full);
    pthread_mutex_destroy(&mutex);

    return 0;
}

*/

// 11 write a c program to simulate the concept of dining philosopher problem

/*
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define N 5  // Number of philosophers

sem_t forks[N];  // One semaphore per fork
pthread_t philosophers[N];

void* philosopher(void* num) {
    int id = *(int*)num;

    while (1) {
        printf("Philosopher %d is thinking.\n", id);
        sleep(rand() % 3 + 1);  // Thinking

        printf("Philosopher %d is hungry.\n", id);

        // Pick up forks (avoid deadlock by picking up in order)
        int left = id;
        int right = (id + 1) % N;

        // To avoid deadlock, last philosopher picks right fork first
        if (id == N - 1) {
            sem_wait(&forks[right]);
            sem_wait(&forks[left]);
        } else {
            sem_wait(&forks[left]);
            sem_wait(&forks[right]);
        }

        printf("Philosopher %d is eating.\n", id);
        sleep(rand() % 2 + 1);  // Eating

        // Put down forks
        sem_post(&forks[left]);
        sem_post(&forks[right]);

        printf("Philosopher %d finished eating and goes back to thinking.\n", id);
    }

    return NULL;
}

int main() {
    int i;
    int ids[N];

    // Initialize semaphores for forks
    for (i = 0; i < N; i++) {
        sem_init(&forks[i], 0, 1);
        ids[i] = i;
    }

    // Create philosopher threads
    for (i = 0; i < N; i++) {
        pthread_create(&philosophers[i], NULL, philosopher, &ids[i]);
    }

    // Join threads (infinite loop, will run indefinitely)
    for (i = 0; i < N; i++) {
        pthread_join(philosophers[i], NULL);
    }

    // Destroy semaphores (never reached in this infinite simulation)
    for (i = 0; i < N; i++) {
        sem_destroy(&forks[i]);
    }

    return 0;
}
*/

// deadlock

// 1 Write a c program to simulate Bankers algorithm for the purpose of deadlock
// avoidance



#include <stdio.h>
#include <stdbool.h>

int main() {
    int n, m, i, j, k;
    
    printf("Enter number of processes: ");
    scanf("%d", &n);
    
    printf("Enter number of resources: ");
    scanf("%d", &m);
    
    int alloc[n][m];   // Allocation Matrix
    int max[n][m];     // Maximum Matrix
    int avail[m];      // Available Resources
    
    printf("Enter Allocation Matrix (allocated resources for each process):\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            scanf("%d", &alloc[i][j]);
        }
    }
    
    printf("Enter Maximum Matrix (maximum resources each process may need):\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            scanf("%d", &max[i][j]);
        }
    }
    
    printf("Enter Available Resources: ");
    for (i = 0; i < m; i++) {
        scanf("%d", &avail[i]);
    }
    
    int need[n][m];  // Need Matrix = Max - Allocation
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            need[i][j] = max[i][j] - alloc[i][j];
        }
    }
    
    bool finish[n];
    for (i = 0; i < n; i++)
        finish[i] = false;
    
    int safeSeq[n];
    int count = 0;
    
    while (count < n) {
        bool found = false;
        for (i = 0; i < n; i++) {
            if (!finish[i]) {
                bool canAllocate = true;
                for (j = 0; j < m; j++) {
                    if (need[i][j] > avail[j]) {
                        canAllocate = false;
                        break;
                    }
                }
                if (canAllocate) {
                    for (k = 0; k < m; k++) {
                        avail[k] += alloc[i][k]; // Release resources
                    }
                    safeSeq[count++] = i;
                    finish[i] = true;
                    found = true;
                }
            }
        }
        if (!found) {
            printf("System is not in a safe state. Deadlock may occur.\n");
            return 0;
        }
    }
    
    printf("System is in a safe state.\nSafe sequence: ");
    for (i = 0; i < n; i++)
        printf("P%d ", safeSeq[i]);
    printf("\n");
    
    return 0;
}















https://asciinema.org/a/8438