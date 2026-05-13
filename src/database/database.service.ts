import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
   private isConnected = false;

   OnModuleInit(){
      this.isConnected = true;
      console.log('Database Connected!');
   }

   OnApplicationShutdown(signal: string){
       this.isConnected = false;
       console.log(`Database Disconnected due to app shutdown. Signal ${signal}`);
   }

   getStatus(){
      return this.isConnected ? 'Connected' : 'Disconnected';
   }
}
