import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faMinimize, faX } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


interface AddFileProps {
  isVisible: boolean;
}

export function AddFile({ isVisible } : AddFileProps) {
  console.log('setIsVisible2:', isVisible);
  return (
    <div className='flex items-center justify-center'>
      <motion.div
        className={`blur-background ${isVisible ? 'active' : 'hidden-blur'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className={`bg-[#F6F5F8] z-[999] shadow rounded-md w-[650px] h-[600px] ${isVisible ? '' : 'hidden'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex justify-between pt-6 pl-4 pr-4'>
          <div>
            <h1 className='font-medium'>CRIE SUA TAREFA</h1>
          </div>
          <div className='flex gap-2'>
            <div>
              <FontAwesomeIcon icon={faWindowMinimize} />
            </div>
            <div>
              <FontAwesomeIcon icon={faMinimize} />
            </div>
            <div>
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
